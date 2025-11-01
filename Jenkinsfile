pipeline {
    agent any

    environment {
        DOCKERHUB = credentials('dockerhub-creds')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/<your-username>/prod-node-microservice.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vaishalidevops/prod-node-app:latest .'
            }
        }

        stage('Login & Push Image') {
            steps {
                sh '''
                echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin
                docker push vaishalidevops/prod-node-app:latest
                '''
            }
        }

        stage('Success') {
            steps {
                echo "✅ Docker image pushed to Docker Hub successfully!"
            }
        }
    }
}
