let language = (function getLanguage(){
    const language = window.sessionStorage.getItem('language')
    if(!language) {
        window.sessionStorage.setItem('language','EN')
        return 'EN'
    }
    return language
})()
function setLanguage(lang) {
    language = lang
    window.sessionStorage.setItem('language',language)
    window.location.reload()
}