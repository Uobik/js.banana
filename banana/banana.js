function clip(text) {
    var copyFrom = document.createElement("textarea");

    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
}

setTimeout(function() {
    document.addEventListener('keydown',(e)=>{
        if(e.ctrlKey&&e.keyCode === 66){
            var taskNo = document.getElementsByClassName("task-no")[0].firstChild.nodeValue.replace(/\t|\n|\r/g, '')
            var title = document.querySelectorAll('*[style="font-size: 20px;"]')[0].firstChild.nodeValue
            var reg =/[\u4e00-\u9fa5]/g;
            var user = document.getElementsByClassName("dropdown-trigger")[0].firstChild.nodeValue.replace(reg, '').replace(/\t|\n|\r/g, '').replace(/\s+/g, '.').substr(1)
            var now = new Date()
            var nowStr = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes()
            var platform = ''
            var type = ''

            if(title.toUpperCase().indexOf('YOPLAY') >= 0){
                platform = 'YOPLAY'
            }
            if(title.toUpperCase().indexOf('YP') >= 0){
                platform = 'YOPLAY'
            }
            if(title.toUpperCase().indexOf('HUNTER') >= 0){
                platform = 'HUNTER'
            }
            if(title.indexOf('捕魚') >= 0){
                platform = 'HUNTER'
            }
            if(title.indexOf('OTC白名單') >= 0){
                platform = 'QP'
            }
            if(title.indexOf('白名單') >= 0){
                type = '白名單'
            }
            if(title.indexOf('接入') >= 0){
                type = '接入單'
            }
            if(title.indexOf('開通') >= 0){
                type = '接入單'
            }
            if(title.indexOf('恢復線路') >= 0){
                type = '接入單'
            }
            if(title.indexOf('線路恢復') >= 0){
                type = '接入單'
            }
            if(title.indexOf('關閉線路') >= 0){
                type = '參數單'
            }
            if(title.indexOf('線路關閉') >= 0){
                type = '參數單'
            }
            if(title.indexOf('綁定') >= 0){
                type = '白名單'
            }

            clip(nowStr + '\t' + platform + '\t' + type + '\t' + taskNo + '\t' + title + '\t\t' + user)
        }
    })
}, 3000);
