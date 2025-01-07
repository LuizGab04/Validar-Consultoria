
var purecookieTitle = "Cookies.", purecookieDesc = "Utilizando esse site, você automáticamente está aceitando o uso de cookies.", purecookieLink = '<a id="Mocookies" class="" type="button" href="#" data-bs-toggle="modal" data-bs-target="#modalCookies">Saiba Mais?</a>', purecookieButton = "Aceitar"; function pureFadeIn(e, o) { var i = document.getElementById(e); i.style.opacity = 0, i.style.display = o || "block", function e() { var o = parseFloat(i.style.opacity); (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e)) }() } function pureFadeOut(e) { var o = document.getElementById(e); o.style.opacity = 1, function e() { (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e) }() } function setCookie(e, o, i) { var t = ""; if (i) { var n = new Date; n.setTime(n.getTime() + i * 1000), t = "; expires=" + n.toUTCString() } document.cookie = e + "=" + (o || "") + t + "; path=/" } function getCookie(e) { for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) { for (var n = i[t]; " " == n.charAt(0);)n = n.substring(1, n.length); if (0 == n.indexOf(o)) return n.substring(o.length, n.length) } return null } function eraseCookie(e) { document.cookie = e + "=; Max-Age=-99999999;" } function cookieConsent() { getCookie("purecookieDismiss") || (document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + "</a></div></div>", pureFadeIn("cookieConsentContainer")) } function purecookieDismiss() { setCookie("purecookieDismiss", "1", 1), pureFadeOut("cookieConsentContainer") } window.onload = function () { cookieConsent() };
function cookieConsent() {
    if (!getCookie("purecookieDismiss")) {
        document.body.innerHTML += `
    <div class="cookieConsentContainer" id="cookieConsentContainer">
        <div class="cookieTitle"><a>${purecookieTitle}</a></div>
        <div class="cookieDesc"><p>${purecookieDesc} ${purecookieLink}</p></div>
        <div class="cookieButton"><a onClick="purecookieDismiss();">${purecookieButton}</a></div>
    </div>`;
        pureFadeIn("cookieConsentContainer");
    }
    $('#cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('#ddd').mask('(00)');
    $('#telefone').mask('00000-0000');
}

function limpar() {
    // Limpar os campos de texto
    document.getElementById("nome").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ddd").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("faturamento").value = "";
    document.getElementById("cnpj").value = "";
    document.getElementById("msg-txt").value = "";

}






