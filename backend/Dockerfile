
# --------------------------- NOT Going to do that! --------------------------- #

# docker build dockerfile/path/     => Builds automatically everything from dockerfile
# docker images                     => List of docker images
# docker build . -t app_name:tag    => Rename docker image

# docker run -p 5050:5050 app_name  => Run image server
#           -> first 5050  : Local Machine Port
#           -> second 5050 : Docker Container Port

# docker start container_name       => Start container in background
# docker ps                         => Port bindings
# docker exec -it ps_name bash      => Get container access for an image
#           -> -it : interactive terminal

# INSIDE CONTAINER
# ps -x     => Process running

# ---------------------------------------------------------------------------- #

FROM python:3.9

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]