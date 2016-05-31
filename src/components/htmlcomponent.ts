abstract class HTMLComponent {

	protected container: HTMLElement;
	protected el: HTMLElement;

	constructor(container: HTMLElement) {
		this.container = container;
		this.buildDOM();
	}

	// only works if there is one root element
	public static string2Element(strHtml: string): HTMLElement {
		let div = document.createElement('div');
		div.innerHTML = strHtml;
		return <HTMLElement>div.firstChild;
	}

	public static findElement(selector: string): HTMLElement {
		return <HTMLElement>document.querySelector(selector);
	}

	protected abstract buildDOM(): void;

}

export default HTMLComponent;