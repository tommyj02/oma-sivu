class ConstantHeader extends HTMLElement{  
    connectedCallback(){
        this.innerHTML=
        `<header>
        <nav>
            <ul>
                <li><a href="index.html">Etusivu </a> 
                    <a href="opiskelu.html">Opiskelu </a> 
                    <a href="harrastukset.html">Harrastukset </a>
                    <a href="tyo.html">Työ </a></li>
            </ul>
        </nav>
    </header>

    `
    }
}

class ConstantDiv extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="footer"><a href="https://github.com/tommyj02" target="_blank">GitHub </a> <a href="https://www.instagram.com/tommyjaaskelainen/" target="_blank">Instagram</a></div>
        `
    }
}

class ConstantSideDiv extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="side"></div>
        `
    }
}

customElements.define('constant-header', ConstantHeader);
customElements.define('constant-div', ConstantDiv);
customElements.define('constant-side-div', ConstantSideDiv);