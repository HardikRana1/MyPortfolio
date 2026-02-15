pipeline {
  agent any

  environment {
    IMAGE_NAME = "ghcr.io/HardikRana1/yourapp:${env.BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/HardikRana1/MyPortfolio.git',
            credentialsId: 'github-https'
      }
    }

    stage('Build & Push Image') {
  steps {
    script {
      kubernetesDeploy(
        configs: '',
        kubeconfigId: '',
        enableConfigSubstitution: false
      )
    }
    sh '''
    kubectl run kaniko-build \
      --namespace=jenkins \
      --rm -i \
      --image=gcr.io/kaniko-project/executor:latest \
      --restart=Never \
      --overrides='
      {
        "spec": {
          "containers": [{
            "name": "kaniko",
            "image": "gcr.io/kaniko-project/executor:latest",
            "args": [
              "--dockerfile=Dockerfile",
              "--context=git://github.com/HardikRana1/MyPortfolio.git",
              "--destination=ghcr.io/HardikRana1/yourapp:'${BUILD_NUMBER}'"
            ],
            "volumeMounts": [{
              "name": "docker-config",
              "mountPath": "/kaniko/.docker/"
            }]
          }],
          "volumes": [{
            "name": "docker-config",
            "secret": {
              "secretName": "ghcr-secret",
              "items": [{
                "key": ".dockerconfigjson",
                "path": "config.json"
              }]
            }
          }]
        }
      }'
    '''
  }
}

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
           kubectl apply -f k8s/deployment.yaml
           kubectl set image deployment/myapp myapp=$IMAGE_NAME
        '''
      }
    }
  }
}
