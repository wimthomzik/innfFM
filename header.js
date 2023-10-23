class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
        <style>
        /*HEADER*/

  
        header {
            width: 100%;
            max-height: 7em;
        
            z-index: 10000;
            
            padding: 1.5rem 2.5rem 1.5rem 2.5rem;
            margin: 0;
        
            display: flex;
            justify-content: space-between;
            align-items: center;   
            /*position: fixed;
            background-color: var(--background-color);*/
        }
        
        
                /*HEADER*/
        
        
                /*HEADER > IMG*/
                .img {
                    height: 3.5rem;
                    margin-bottom: 0.5rem;
                }
        
                /*HEADER > TITLE*/
                .header-heading {
                    display: none;
                    padding: 0;
                    margin: 0;
                    font-size: 0.8em;
                }
        
        
                /*HEADER > NAV-BAR*/
        
                .navbar-container {
                    display: none;
                }
        
                .navbar-container > nav > ul {
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    gap: 1.1rem;
        
                    padding: 0;
                    margin: 0;
        
                    list-style: none;
                    
                }
        
        
        
                .nav-link-ani, .nav-link-ano, .nav-link-ana, .nav-link-ane {
                    text-decoration: none;
                    font-size: 20px;
                    text-transform: uppercase;
                    opacity: 0.75;
                }
        
                .nav-link-ani:hover, .nav-link-ano:hover, .nav-link-ana:hover, .nav-link-ane:hover {
                    opacity: 1;
                }
        
                .nav-link-ani::before, .nav-link-ano::before, .nav-link-ana::before, .nav-link-ane::before{
                    transition: 300ms;
                    height: 5px;
                    content: "";
                    position: absolute;
                    top: 68px;
                    background-color: rgb(221,221,221);
                }
        
                .nav-link-ani::before, .nav-link-ano::before, .nav-link-ana::before, .nav-link-ane::before {
                    width: 0%;
                    bottom: 5px;
                }
                .nav-link-ani:hover::before {
                    width: 98px;
                }
        
                .nav-link-ano:hover::before {
                    
                    width: 130px;
                }
        
                .nav-link-ana:hover::before {
                    width: 51px;
                }

                .nav-link-ane:hover::before {
                    width: 60px;
                }
        
                
        
                /*HEADER > PODCAST LINKS*/
                .podcast-links-headers {
                    display: none;
                    gap: 2.3rem;
                    
                    list-style: none;
        
                    margin: 0; 
                    padding: 0;
                }
        
                .podcast-links-headers > li > a {
                    text-decoration: none;
                    font-size: 25px;
                }
        
                .podcast-links-headers > li > a:hover {
                    opacity: 0.85;
                    transition: 300ms;
                }
        
        
        
                /*HEADER > DROPDOWN*/
        
                .dropdown {
                    display: inline-block;
                    position: relative;
                    
                }
        
                .dropdown-content {
                    display: none;
                    position: absolute;
                    background: linear-gradient(to bottom right, rgb(34,34,34), rgb(63, 63, 63));
                    width: 100%;
                    right: 0;
                    z-index: 1;
                    text-align: center;
                    justify-content: center;
                    padding: 2rem 0;
                }
        
                .dropdown-content a {
                    color: var(--default-font-color);
                    padding: 1.3rem;
                    font-weight: bold;
                    text-decoration: none;
                    display: block;
                    font-size: var(--xl-font-size);
                  }
                
                .dropdown-content a:hover {
                    opacity: 0.5;
                    transition: 300ms;
                    cursor: pointer;
                }
                
            
                .show {
                    display: block;
                }
                
                .dropbtn {
                    display: flex;
                    color: var(--default-font-color);
                    background-color: var(--background-color);
                    border: none;
                    outline: none;
                    font-size: 1.4em;
                }
        
                .dropbtn:hover {
                    opacity: 0.75;
                    transition: 300ms;
                    cursor: pointer;
                }
        
        
                @media (min-width: 375px){
                    .header-heading {
                        display: none;
                    }
                }
        
                @media (min-width: 380px){
                    .header-heading {
                        display: block;
                        font-size: 1em;
                    }
                }
        
                @media (min-width: 500px){
                    .header-heading {
                        font-size: 2em;
                    }
                }
                
                @media (min-width: 730px){
        
                    header {
                        padding: 1.3rem 2.7rem 1.3rem 2.7rem;
                    }
        
                            .header-heading {
                                display: none;
                            }
                    
                            /*HEADER*/
                    
                            .img {
                                height: 4rem;
                                border-radius: 2px;
                            }
                    
                            /*HEADER > PODCAST LINKS*/
                            .podcast-links-headers {
                                display: flex;
                                flex-direction: row;
                            }
                    
                    
                            /*HEADER > DROPDWN*/
        
                            .dropdown {
                                display: none;
                            }
        
                            /*HEADER > NAV*/
        
                            .navbar-container {
                                display: contents;
                            }         
                }
                
                @media (min-width: 900px){
                    .navbar-container > nav > ul {
                        gap: 3rem;
                    }
                }
        </style>

        <!-----------------------------HEADER START--------------------------------------->
        <header>

            <img class="img" src="img/Markus_Logo_Variante.png" loading="lazy"> 

            <!--<h1 class="header-heading">InnoFM Podcast</h1>-->
            
           <div class="navbar-container">
                <nav>
                    <ul>
                        <li><a class="nav-link-ane" href="index.html#welcome-section">Home</a></li>
                        <li><a class="nav-link-ani" href="index.html#section-episodes">Episoden</a></li>
                        <li><a class="nav-link-ano" href="index.html#section-sources">Abonnieren</a></li>
                        <li><a class="nav-link-ana" href="index.html#section-host">Host</a></li>
                    </ul>
                </nav>
            </div>

            <ul class="podcast-links-headers">
                <li><a href="https://podcasts.apple.com/de/podcast/innofm-interviewpodcast/id1465389661" class="fa-brands fa-apple" target=”_blank”></a></li>
                <li><a href="https://open.spotify.com/show/2F01b8YJJhX6rF1FCxVJrt?si=vlm4sLBWQ8SnUQM5nEqC3g&nd=1" class="fa-brands fa-spotify"  target=”_blank”></a></li>
                <li><a href="https://music.amazon.de/podcasts/211090e3-bb52-4a80-aa7a-d6287e8d520d/innofm---interviewpodcast?ref=dm_sh_lg535rVJuIeZ2gXq0Cz0cJYEY" class="fa-brands fa-amazon"  target=”_blank”></a></li>
            </ul>

            <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn"><i class="fa-solid fa-bars dropbtn"></i></button>
              </div>

            
        </header>

        <!-----------------------------HEADER ENDE--------------------------------------->

        <div id="myDropdown" class="dropdown-content">
            <a href="index.html#welcome-section">Home</a>
            <a href="index.html#section-episodes">Episoden</a>
            <a href="index.html#section-sources">Abonnieren</a>
            <a href="index.html#section-host">Host</a>
          </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);