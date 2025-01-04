document.addEventListener("DOMContentLoaded", function () {const observer = new IntersectionObserver((entries) => {entries.forEach((entry) => {if (entry.isIntersecting) {entry.target.classList.add("displayed");} else {entry.target.classList.remove("displayed");}});},{threshold: 1,});document.querySelectorAll(".box").forEach((box) => {observer.observe(box);});});


// DOMContentLoaded イベント

// document.addEventListener("DOMContentLoaded", function () { ... });
// ページのDOMツリーが完全に読み込まれたタイミングで、この中のコードが実行されます。
// これにより、スクリプトがDOMの要素にアクセスできる状態を保証。


// IntersectionObserver の設定

// const observer = new IntersectionObserver((entries) => { ... }, { threshold: 1 });
// IntersectionObserver は要素がビューポート（画面内）に入るか出るかを監視するAPIです。
// entries は監視中の各要素の状態を表すオブジェクトのリストです。
// { threshold: 1 } は、要素が100%ビューポート内に表示された場合のみコールバックがトリガーされることを意味します。


// entries.forEach ループ

// entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("displayed");
//     } else {
//         entry.target.classList.remove("displayed");
//     }
// });
// 各entryのisIntersectingプロパティを確認します。
// trueの場合、要素がビューポート内にあります。
// この場合、対象の要素（entry.target）にdisplayedクラスを追加します。
// それ以外の場合（false）、displayedクラスを削除します。


// 監視対象の要素を設定

// document.querySelectorAll(".box").forEach((box) => {
//     observer.observe(box);
// });
// DOM内のすべての.boxクラスの要素を取得し、それぞれをobserver.observeで監視対象として設定します。
