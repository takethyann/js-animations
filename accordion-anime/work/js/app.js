const accordions = document.querySelectorAll('.list-item'); accordions.forEach(accordion => { accordion.addEventListener('click', () => { const content = accordion.querySelector('.list-content'); content.classList.toggle('active'); if(content.classList.contains('active')) { content.style.height = content.scrollHeight + 'px'; } else { content.style.height = '0px'; } }); });


// すべてのメニューボタンをquerySelectorAll()メソッドでまとめて取得し、変数.list-itemに保存する。

// const accordions = document.querySelectorAll('.list-item');

// すべてのメニューボタンをクリックできるようにするために、
// forEach()メソッドでメニューボタン一つ一つに処理を行う。

// accordions.forEach(accordion =>{})

// addEventListener()メソッドでメニューボタンがクリックされたときに関数が実行されるようにする。

// accordions.forEach(accordion =>{accordion.addEventListener(`click`,() =>{})})

// ここでquerySelector()メソッドでCSSセレクタでHTML要素を指定する。

// const content = accordion.querySelector('.list-content');content.classList.toggle(`active`);

// コンテンツを開くか閉じるかを if...elseで処理を分ける。
// if(content.classList.contains('active')) {

// 条件を満たす場合コンテンツを開くCSSでheightを０にし高さが０だと表示されないためscrollHeightプロパティでコンテンツの高さを取得し、その値をコンテンツの高さheightとしている。

//  { content.style.height = content.scrollHeight + 'px'; } 

// else { content.style.height = '0px'; } }); });
// コンテンツの高さを０にして閉じる