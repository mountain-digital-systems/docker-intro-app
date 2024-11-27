# MountainTechDigital Docker Todo App Tutorial

![Screen Shot 2022-08-23 at 3 57 21 PM](https://user-images.githubusercontent.com/110779479/186264249-d18acf74-f545-40e1-91a5-ec4eef5475cf.png)

This tutorial has been written with the intent of helping folks get up and running
with containers and is designed to work with Docker Desktop. While not going too much
into depth, it covers the following topics:

- Running your first container
- Building containers
- Learning what containers are running and removing them
- Pulling containers from Repository, Building and Running Them

## Getting Started

1. Create your branch in github repository https://github.com/mountain-digital-systems/docker-intro-app

2. Clone the master branch into your local git-repos directory.

```bash
git clone https://github.com/mountain-digital-systems/docker-intro-app.git
```

3. Create your local branch and switch to it.

```bash
git checkout -b <Your-Branch-Name>
```

4. Edit your application to customize it to your taste. You can start by opening index.html in app -> src -> static -> index.html and changing 'John Shu' to 'Your Name'.

5. Now save the application, commit with a message and then push to your remote branch name. You can use 'git branch -a' to find out about the remote branches. '-m' below is used to specify the commit message. You can change the message to anything e.g. 'Changed name to my name.'

```bash
git commit -a -m 'Updated my Company Name'
```

The git push command will push your committed changes to your branch. Note that you always pushn to your branch. You NEVER push to 'main' or 'master'. You always push to your branch and create a PR (Pull Request) to pull in the changes from your branch into the main or master branch.
If you are on your branch locally (which you really always should!) you can just do a 'git push' without specifying the branch. Git will know to push to your branch. Again NEVER push to master! So always make sure you are on your branch before you do any push.

```bash
git push origin <your-remote-branch-name>
```

6. Now we that we have made the changes, we want to dockerize the application and then deploy the image(the packaged application) so we can view our application in the browser. We must first make sure docker is installed and running in our local computer.

To see all the images currently available run:

```bash
docker images
```

The images are blue prints or prototypes of your actively running application. When you run these images they become containers or process (ps) which are the live version of the images.

To see all the currently available/running processes run:

```bash
docker ps
```

7. Now to build the image we use 'docker build'. We make sure to run this command in the folder where we have our specified 'Dockerfile'. This will run through the Dockerfile and build an image. You can replace the 'johnshu' below with any name. e.g. 'johnsmith-docker-app'

```bash
docker build -t johnshu-docker-app .
```

8. Now that we have built the image, we can take a look at it using the docker ps command. Then we can move on to running the image.

```bash
docker ps
```

Again be sure to find the name of the app you gave e.g. 'johnsmith-docker-app'. Update the command below with the right name before running. The same is true for the rest of the places you see johnshu.

```bash
docker run -d -p 3000:3000 johnshu-docker-app
```

8. When the build is complete you should be able to run 'docker ps' and see the new container. Remember now its no longer an image but a container with a pod running inside the container.

You can access it on your browser using either http://localhost:3000 or 0.0.0.0:30000

```bash
docker ps
```

9. If you are happy with the results of your application. You can docker tag it e.g. v1.0.0 and then push it to the repository.
   Reference docker's official documents on different ways you can tag. https://docs.docker.com/reference/cli/docker/image/tag/
   You will need to create an account on dockerhub https://hub.docker.com/ and instead of shujohns use your dockerhub username.
<img width="1924" alt="Screen Shot 2024-11-27 at 12 59 06 PM" src="https://github.com/user-attachments/assets/dc1f0f73-1c99-4f38-b25f-6648a6e60d52">

```bash
docker tag 518a41981a6a shujohns/johnshu-docker-app
```

```bash
docker push shujohns/johnshu-docker-app
```

10. To get rid of an image so as to preserve disk space, you have to kill the process first and then remove its associated image.

```bash
docker kill <process-id>
```

```bash
docker rmi -f <container-id>
```

```bash
docker rmi -f $(docker images -q)
```
