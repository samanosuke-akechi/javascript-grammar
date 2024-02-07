// クリップボードAPIを使ったクリップボードへの読み書き機能
// https://developer.mozilla.org/ja/docs/Web/API/Clipboard
class Clipboard {
  constructor() {
    this.clickClip();
  }

  clickClip() {
    document.querySelectorAll('.clipboard-target').forEach((clipboardElement) => {
      const clipContent = clipboardElement.dataset.clipContent;

      clipboardElement.addEventListener('click', async() => {
        await navigator.clipboard.writeText(clipContent); // クリップボードへのテキストの書き込み
        clipboardElement.className = 'bi bi-clipboard-check'

        // Bootstrapのtooltip(吹き出し)とアイコンを使っている場合の吹き出し表示やアイコン変化
        if (clipboardElement.dataset.bsToggle === 'tooltip') {
          const tooltip = new bootstrap.Tooltip(clipboardElement);
          tooltip.show();

          setTimeout(() => {
            clipboardElement.className = 'bi bi-clipboard clipboard-target'
            tooltip.hide();
          }, 3000);
        };
      })
    })
  };
};

document.addEventListener('DOMContentLoaded', () => {
  new Clipboard();
})
