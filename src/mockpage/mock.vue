<template>
  <div class="container text-center">
    <div id="logo" class="container">
      <h1 class="MaxNameLogo"><span>MAX</span> SHOES</h1>
      <p>Best shoes in word !!!</p>
    </div>

    <div id="banner">
      <img src="@/mockpage/images/boots.jpg" width="1200" height="500" alt="" />
    </div>
    <div id="three-column" class="container">
      <div id="tbox1">
        <h2>Maecenas luctus</h2>
        <p>
          Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna.
          Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit
          interdum.
        </p>
        <a href="#" class="button">Learn More</a>
      </div>
      <div id="tbox2">
        <h2>Integer gravida</h2>
        <p>
          Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem
          semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac
          mauris.
        </p>
        <a href="#" class="button">Learn More</a>
      </div>
      <div id="tbox3">
        <h2>Big SALE !</h2>
        <a href="#" class="image image-full"
          ><img src="@/mockpage/images/valentinesale.jpg" alt=""
        /></a>
      </div>
      <div id="tbox2">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          totam, harum molestias unde earum aperiam minima architecto.
          Molestias, odit ad!
        </p>
        <a href="#" class="button">Learn More</a>
      </div>
    </div>
    <div id="page">
      <div id="content">
        <div class="title">
          <h2>Welcome <span class="byline">to our website</span></h2>
        </div>
        <a href="#" class="image image-full"
          ><img src="@/mockpage/images/feet-boots.jpg" alt=""
        /></a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          fugiat ex a ipsum voluptate minima dolorem omnis, unde natus incidunt
          soluta quasi voluptatum esse sint voluptas possimus necessitatibus,
          molestias doloremque quis quae! Maxime sint cupiditate quasi culpa
          minima repellat optio saepe modi reiciendis non ex tempore qui numquam
          corporis, asperiores repellendus. Atque possimus ex quam recusandae!
          Facilis, vero consequuntur repellat, fugit consectetur ut at dicta aut
          obcaecati, itaque quia cupiditate nam doloremque veritatis nesciunt
          veniam voluptate illo. Repudiandae, totam pariatur?
        </p>
      </div>
      <div id="sidebar">
        <h2 class="title">Mauris vulputate</h2>
        <ul class="style2">
          <li class="first">
            <h3><a href="#">Maecenas luctus lectus</a></h3>
            <p>
              <a href="#"
                >Quisque dictum integer nisl risus, sagittis convallis, rutrum
                id, congue, and nibh.</a
              >
            </p>
          </li>
          <li>
            <h3><a href="#">Integer gravida nibh</a></h3>
            <p>
              <a href="#"
                >Quisque dictum integer nisl risus, sagittis convallis, rutrum
                id, congue, and nibh.</a
              >
            </p>
          </li>
          <li>
            <h3><a href="#">Nulla luctus eleifend</a></h3>
            <p>
              <a href="#"
                >Quisque dictum integer nisl risus, sagittis convallis, rutrum
                id, congue, and nibh.</a
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div id="footer" class="container">
      <div id="fbox1">
        <h2 class="title">Praesent mattis</h2>
        <p>
          Pellentesque viverra vulputate enim. Aliquam erat volutpat.
          Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl
          risus, sagittis convallis, rutrum id, elementum congue, nibh.
          Suspendisse dictum porta lectus.
        </p>
        <a href="#" class="button">Learn More</a>
      </div>
      <div id="fbox2">
        <h2 class="title">Praesent condimentum</h2>
        <ul class="style1">
          <li class="first">
            <a href="#">Pellentesque consectetuer gravida blandit.</a>
          </li>
          <li><a href="#">Lorem consectetuer adipiscing elit.</a></li>
          <li><a href="#">Maecenas vitae vitae feugiat eleifend.</a></li>
        </ul>
        <a href="#" class="button">Learn More</a>
      </div>
      <div id="fbox3">
        <h2 class="title">Social</h2>
        <ul class="style1">
          <li class="first"><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Flickr</a></li>
          <li><a href="#">Google +</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12pt;
  font-weight: 400;
  color: #919191;
}

.MaxNameLogo {
  font-size: 70px;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

p,
ol,
ul {
  margin-top: 0;
}

ol,
ul {
  padding: 0;
  list-style: none;
}

p {
  line-height: 180%;
}

a {
  color: #747474;
}

a:hover {
  text-decoration: none;
}

.container {
  margin: 0px auto;
  width: 1200px;
}

/*********************************************************************************/
/* Heading Titles                                                                */
/*********************************************************************************/

.title {
  margin-bottom: 2em;
}

.title h2 {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2em;
  color: #fff;
}

.title .byline {
  color: #6f6f6f;
}

/*********************************************************************************/
/* Image Style                                                                   */
/*********************************************************************************/

.image {
  display: inline-block;
}

.image img {
  display: block;
  width: 100%;
}

.image-full {
  display: block;
  width: 100%;
  margin: 0 0 2em 0;
}

.image-left {
  float: left;
  margin: 0 2em 2em 0;
}

.image-centered {
  display: block;
  margin: 0 0 2em 0;
}

.image-centered img {
  margin: 0 auto;
  width: auto;
}

/*********************************************************************************/
/* List Styles                                                                   */
/*********************************************************************************/

ul.style1 {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

ul.style1 li {
  padding: 10px 0px 15px 0px;
  border-top: 1px solid #363636;
}

ul.style1 a {
  text-decoration: none;
  color: #919191;
}

ul.style1 a:hover {
  text-decoration: underline;
}

ul.style1 .first {
  padding-top: 0px;
  border-top: none;
}

ul.style2 {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

ul.style2 li {
  padding: 25px 0px 15px 0px;
  border-top: 1px solid #363636;
}

ul.style2 .first {
  padding-top: 0px;
  border-top: none;
}

ul.style2 h3 {
  padding: 0px 0px 10px 0px;
  letter-spacing: 0.1em;
}

ul.style2 h3 a {
  color: #fff;
}

ul.style2 a {
  text-decoration: none;
  color: #919191;
}

ul.style2 a:hover {
  text-decoration: underline;
}

/*********************************************************************************/
/* Social Icon Styles                                                            */
/*********************************************************************************/

ul.contact {
  margin: 0;
  padding: 2em 0em 0em 0em;
  list-style: none;
}

ul.contact li {
  display: inline-block;
  padding: 0em 0.3em;
  font-size: 1em;
}

ul.contact li span {
  display: none;
  margin: 0;
  padding: 0;
}

ul.contact li a {
  color: #fff;
}

ul.contact li a:before {
  display: inline-block;
  background: #3f3f3f;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
}

ul.contact li a.icon-twitter:before {
  background: #2daae4;
}
ul.contact li a.icon-facebook:before {
  background: #39599f;
}
ul.contact li a.icon-dribbble:before {
  background: #c4376b;
}
ul.contact li a.icon-tumblr:before {
  background: #31516a;
}
ul.contact li a.icon-rss:before {
  background: #f2600b;
}

/*********************************************************************************/
/* Button Style                                                                  */
/*********************************************************************************/

.button {
  display: inline-block;
  margin-top: 2em;
  background: #bc1414;
  border-radius: 5px;
  line-height: 4em;
  padding: 0 3em;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  letter-spacing: 0.25em;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  white-space: nowrap;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 0.8em !important;
  color: #fff !important;
}

.button:hover {
  background: #bb1717;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.button:active {
  background: #b41313;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

/*********************************************************************************/
/* Header                                                                        */
/*********************************************************************************/

/*********************************************************************************/
/* Logo                                                                          */
/*********************************************************************************/

#logo {
  padding: 3em 0em;
  text-transform: uppercase;
}

#logo h1 a {
  text-decoration: none;
  font-size: 1.5em;
  color: #fff;
}

#logo span {
  color: #bc1414;
}

#logo p {
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
  font-size: 0.9em;
}

#logo p a {
  text-decoration: none;
}

/*********************************************************************************/
/* Menu                                                                          */
/*********************************************************************************/

#menu {
  border-bottom: 4px solid #bc1414;
}

#menu ul {
  margin: 0;
  padding: 0px 0px 0px 0px;
  list-style: none;
  line-height: normal;
  text-align: center;
}

#menu li {
  display: inline-block;
}

#menu a {
  display: block;
  padding: 0em 2em;
  line-height: 80px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 700;
  color: #838383;
}

#menu .current_page_item a {
  background: #bc1414;
  color: #fff;
}

#menu a:hover {
  text-decoration: none;
  color: #fff;
}

/*********************************************************************************/
/* Banner                                                                        */
/*********************************************************************************/

#banner {
  margin: 2em auto;
}

/*********************************************************************************/
/* Page                                                                          */
/*********************************************************************************/

#page {
  overflow: hidden;
  padding: 3em 0em;
  border-bottom: 1px solid #363636;
  background-color: rgba(243, 215, 215, 0.486);
}

/*********************************************************************************/
/* Content                                                                       */
/*********************************************************************************/

#content {
  float: left;
  width: 800px;
}

/*********************************************************************************/
/* Sidebar                                                                       */
/*********************************************************************************/

#sidebar {
  float: right;
  width: 300px;
}

#sidebar .title {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
}

/*********************************************************************************/
/* Footer                                                                        */
/*********************************************************************************/

#footer {
  overflow: hidden;
  padding: 6em 0em 4em 0em;
  border-bottom: 1px solid #363636;
}

#footer .title {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
}

#footer #fbox1 {
  float: left;
  width: 400px;
  margin-right: 50px;
}

#footer #fbox2 {
  float: left;
  width: 400px;
}

#footer #fbox3 {
  float: right;
  width: 300px;
}

/*********************************************************************************/
/* Copyright                                                                     */
/*********************************************************************************/

#copyright {
  padding: 6em 0em;
  font-size: 0.75em;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  color: #6a6a6a;
}

#copyright a {
  color: #747474;
}

/*********************************************************************************/
/* Three Columns                                                                 */
/*********************************************************************************/

#three-column {
  overflow: hidden;
  margin-bottom: 2em;
  background: #fff;
  border-bottom: 4px solid #bc1414;
  color: #525252;
}

#three-column h2 {
  margin: 1em 0em;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 700;
  color: #454445;
}

#three-column #tbox1,
#three-column #tbox2,
#three-column #tbox3 {
  float: left;
  width: 600px;
  padding: 50px 50px 80px 50px;
}
</style>
