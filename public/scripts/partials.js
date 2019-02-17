/* eslint-disable no-console */
//Get the element
const navigation = document.querySelector('#myNav');
const footer = document.querySelector('#myFooter');



//action element
AddNavigationBar(navigation);
AddFooter(footer);


/**
 * @description Functions to populate the dom with predefined NavBar
 * @author Burrows
 * @date 2019-02-17
 * @param {Element} htmlElement
 */
function AddNavigationBar(htmlElement) {
	if (htmlElement != null) {
		try {
			htmlElement.setAttribute(
				'class',
				'navbar navbar-expand-md navbar-light bg-light sticky-top',
			);

			htmlElement.innerHTML = `<div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <img src="img/Albion.png" style="height: 75px" >
            <!-- Collapse button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
             <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Service</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Team</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">connect</a>
                  </li>
              </ul>

            </div>
            </div>`;
		} catch (error) {
			console.error(error);
		}
	}
}

/**
 * @description Functions to populate the dom with predefined Footer
 * @author Burrows
 * @date 2019-02-17
 * @param {Element} htmlElement
 */
function AddFooter(htmlElement) {
	if (htmlElement != null) {
		try {
			htmlElement.innerHTML = `<blockquote class="blockquote text-center">
<p>Copyright &copy; ${new Date().getFullYear()} Albion Software rights reserved .</p>
</blockquote>`;
		} catch (error) {
			console.error(error);
		}
	}
}
