# Steve Varley Show

Website for [Steve Varley Show](https://www.stevevarley.com)

![Main](public/screenshot-main.png?raw=true "Main")

![TV](public/screenshot-tv.png?raw=true "TV Shows")

![Videos](public/screenshot-video.png?raw=true "Videos")

## Stack

Built using:

- [nextjs](https://nextjs.org/) for static site rendering

- [aws amplify](https://aws.amazon.com/amplify/) for backend, hosting and auth

- [antd](https://ant.design/) for components

- [imgbb](https://imgbb.com/) for content storage. Must define `IMGBB_API_KEY` in environment to upload images


## Content Management

Content is managed through `/admin ` page. There you can add/edit media (tv, movie or other) and videos (reviews or interviews).

Youtube video characteristics (name, duration and published date) are pulled automatically when video is validated.


![Admin](public/screenshot-admin.png?raw=true "Admin")

![Add Media](public/screenshot-add-media.png?raw=true "Add Media")

![Edit Media](public/screenshot-edit-media.png?raw=true "Edit Media")

![Edit Video](public/screenshot-edit-video.png?raw=true "Edit Video")


