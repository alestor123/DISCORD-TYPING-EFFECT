module.exports =  msg => {
if(msg.content.startsWith('type')){
var key = msg.content.replace('type','').substr(msg.content.indexOf(" ")+1)
msg.reply('msg : ').then(edit => {
var i = 0,
fin = '',
interval = setInterval(() => {
if(i==key.length) clearInterval(interval)
else {
fin = fin+key.charAt(i)
edit.edit(fin)
i++
}},msg.content.split(' ')[1]);
}
)
}}