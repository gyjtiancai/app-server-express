const HeaderHTML =
    `<div class="app-header">
    <div class="app-header-title" id="app-title">
        <img class="title-icon" src="images/logo.png" alt="" />
        <p class="title-label">${language === 'CN' ? "葛宇杰的个人网站" : "Ge Yujie's personal website"}</p>
    </div>
    <div class="app-header-directory">
        <div class="nav-item" id="app-home">${language === 'CN' ? '主页' : 'Home'}</div>
        <div class="nav-item">
            <select id="changeLanguage">
                ${
                    language ==='CN' ? 
                    `<option value="EN">${language === 'CN' ? '英文' : 'english'}</option>
                     <option selected value="CN">${language === 'CN' ? '中文' : 'chinese'}</option>`
                    :
                    `<option selected value="EN">${language === 'CN' ? '英文' : 'english'}</option>
                     <option value="CN">${language === 'CN' ? '中文' : 'chinese'}</option>`
                }
            </select>
        </div>
    </div>
</div>`
const RootDom = document.getElementById("root")
// RootDom.appendChild(HeaderHTML)
RootDom.innerHTML = HeaderHTML
document.getElementById("changeLanguage").addEventListener('change', changeLanguage)
function changeLanguage(e) {
    console.log('当前语言：', e.target.value)
    setLanguage(e.target.value)
}
document.getElementById("app-title").addEventListener('click', changeRouter)
function changeRouter() {
    const { pathname } = window.location;
    switch (pathname) {
        case '/':
            break;
        case '/home':
            window.location.replace('/');
            break;
        default:
            break;
    }
}
document.getElementById("app-home").addEventListener('click', isGoHome)
function isGoHome(){
    const { pathname } = window.location;
    switch (pathname) {
        case '/':
            window.location.replace('/home');
            break;
        case '/home':
            break;
        default:
            break;
    }
}