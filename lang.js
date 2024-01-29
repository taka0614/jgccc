function langJa() {
	contact.innerHTML = "お問い合わせ";
	product.innerHTML = "製品";
	development.innerHTML = "共同開発";
	technology.innerHTML = "基礎技術";
	business_and_prospects.innerHTML = "4つの事業と展望";
	recruitment.innerHTML = "採用";
	sustainability.innerHTML = "サステナビリティ";
	top_thumbnail_text.innerHTML = "ナノから<br>世界を変える";
	top_news_text.innerHTML ="ニュース一覧";
}

// 英語に切り替え
function langEn() {
	contact.innerHTML = "Contact";
	product.innerHTML = "Product";
	development.innerHTML = "Development";
	technology.innerHTML = "Technology";
	business_and_prospects.innerHTML = "Business and Prospects";
	recruitment.innerHTML = "Recruitment";
	sustainability.innerHTML = "Sustainability";
	top_thumbnail_text.innerHTML = "Changing the world<br>with nano";
	top_news_text.innerHTML ="news list";
}

let select = document.getElementById("select_lang");

select.onchange = event => {
	switch (select.value) {
		case "jp":
			langJa();
			break;
		case "en":
			langEn();
			break;
	}
}
window.onload = function () {
	select.onchange();
}