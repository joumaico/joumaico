# Flask App with Docker, Gunicorn, and Nginx

This repository provides a template for deploying a Flask application using Docker, Gunicorn as the WSGI server, and Nginx as the reverse proxy with SSL encryption. A valid SSL certificate is a must-have to run this project. The deployment process is automated and managed by Ansible.

## Master Server

We clone the repository to the master server because it contains the `ansible/` directory, which includes scripts for building and rebuilding Docker containers, performing system upgrades, and importation of SSL certificates.

```bash
$ git clone https://github.com/joumaico/joumaico.git
```

## Slave Server

To allow the master server to communicate with the slave server, copy the master server's public SSH key to the slave server's authorized keys. These will allow the master server to access the slave server via SSH without a password, which is necessary for Ansible to execute tasks remotely.

On the master server:

```bash
$ cat ~/.ssh/id_rsa.pub
```

Copy the output, then on the slave server, append newline into the `~/.ssh/authorized_keys`.

## Edit Ansible Hosts and SSL Certificates

- Navigate to the `ansible/hosts` file and edit it to include the details of the server.
- Ensure that SSL certificates are copied to the `ansible/nginx/` directory.

> [!TIP]
> Get SSL certificates from https://freessl.org.

## Deployment

This command will handle the deployment process:

```bash
$ make deploy
```

## Rebuild After Git Push

If there are new changes pushed to the repository, we can rebuild the project by running:

```bash
$ make rebuild
```
