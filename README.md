# AudreyHepburn
Project Audrey Hepburn

Summary:
Intro...
Details...
  Data...


Data Folder

This folder contains all the data used on the project, since there is no API on the internet all data was researched and added manually. For easier navigation
and eventual changes it is divided in several files, each with one specific destination and function, so the page loads only the necessary information to not risk 
losing performance (for example, the Movies page doesn't need to load all the info from Books). As a general rule "data_..." are the documents imported to the 
Components. 
Files descriptions are:
  *(data_movies.js) : This file is used to feed the component of Movies, the structure is composed by objects with key/value pair. It is imported to the Component, 
and is the only file needed to render all the movies information, it receives data from (movies_text.js) and (images.js).

  *(movies_text.js) : This file contains all the long texts necessary for (data_movies.js) to work, and has the main function of keeping clarity, since long texts 
would make the structure hard to read and change if it was all put inside (data_movies.js).

  *(data_books_about.js) : This file is used to feed the component of Books About Audrey, the structure is composed by objects with key/value pair. It is imported 
to the Component, and is the only file needed to render all the information on books about Audrey, it receives data from (aboutAudrey_text.js) and (images.js).

  *(aboutAudrey_text.js) : This file contains all the long texts and links necessary for (data_books_about.js) to work, also has the function of keeping clarity,
with the added importance of hosting links, so it is even more important to have easy access in case it breaks and needs to be replaced.

  *(data_books_herReadlist.js) : This file is used to feed the component of Audrey's Readlist, the structure is composed by objects with key/value pair. It is 
imported to the Component, and is the only file needed to render all the information Audrey's readlist, it receives data from (herReadlist_text.js) and 
(images.js). The reason why it's separated from the Books About Audrey is the same for detaching Movies, it is rendered on a different component and the 
performance is better if it's info is loaded only when it is needed.

  *(herReadlist_text.js) : This file contains all the long texts and links necessary for (data_books_herReadlist.js) to work, also has the function of keeping 
clarity, with the added importance of hosting links, so it is even more important to have easy access in case it breaks and needs to be replaced.

  *(images.js) : This file contains all the image links used on the project, since image links are much shorter than texts and the number of images is not too
big, it was not necessary to split the links in different files, making it more complex to identify and find the correct file that had the link address. It is 
imported by every (data_...) file and also imported directly to Components that use images.