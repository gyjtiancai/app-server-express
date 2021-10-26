let currentLanguage = 'EN'
const HeaderHTML = `<div class="app-header">
    <a href="/">
        <div class="app-header-title">
            <img class="title-icon" src="images/logo.png" alt="" />
            <p class="title-label">${currentLanguage === 'CN' ? "葛宇杰的个人网站" : "Ge Yujie's personal website"}</p>
        </div>
    </a>
    <div class="app-header-directory">
        <a href="/home">
            <div class="nav-item">${currentLanguage === 'CN' ? '主页' : 'Home'}</div>
        </a>
        <div class="nav-item">
            <select id="changeLanguage" disabled>
                <option value="EN">${currentLanguage === 'CN' ? '英文' : 'english'}</option>
                <option value="CN">${currentLanguage === 'CN' ? '中文' : 'chinese'}</option>
            </select>
        </div>
    </div>
</div>`
const RootDom = document.getElementById("root")
// RootDom.appendChild(HeaderHTML)
RootDom.innerHTML = HeaderHTML
document.getElementById("changeLanguage").addEventListener('change',changeLanguage)
function changeLanguage(e){
    currentLanguage = e.target.value
    console.log('当前语言：',currentLanguage)
}