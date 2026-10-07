pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                   git clone https://github.com/abinjaz/new-gitac.git
                   ls -l
                '''
            }
        }
        stage ('deploy'){
            steps{
                sh '''
                   cp -r new-gitac/* /var/www/html
                   ls -l /var/www/html
                  '''
            }
        }
    }
}
