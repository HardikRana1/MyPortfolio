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
            credentialsId: 'github-token'
      }
    }

    stage('Build Docker Image') {
      steps {
        withCredentials([string(credentialsId: 'ghcr-token', variable: 'TOKEN')]) {
          sh '''
            echo $TOKEN | docker login ghcr.io -u HardikRana1 --password-stdin
            docker build -t $IMAGE_NAME .
            docker push $IMAGE_NAME
          '''
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl set image deployment/myapp myapp=$IMAGE_NAME
        '''
      }
    }
  }
}
