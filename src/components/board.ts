import './board.scss'
import 'es6-shim'
import { Subject } from 'rxjs/Subject'
import { Subscription } from 'rxjs/Subscription'
import Component from './component'

const TMPL_BOARD = '<div class="board"></div>';
const TMPL_ROW = '<div class="board-row"></div>';
const TMPL_CELL = '<div class="board-cell"></div>';

export interface CellPosition {
	i: number;
	j: number;
}

export class Board extends Component {

	private cellClickListener: EventListener;
	private clickSubject: Subject<CellPosition>;

	constructor(container: HTMLElement, size?: number) {
		super(container);
		this.cellClickListener = this.cellClick.bind(this);
		this.clickSubject = new Subject();
		this.buildDOM(size);
	}

	protected buildDOM(size: number = 3): void {
		this.el = Component.string2Element(TMPL_BOARD);

		const cssSize = 100/size;
		let row: HTMLElement;
		let cell: HTMLElement;
		for (let i = 0; i < size; i++) {
			
			row = Component.string2Element(TMPL_ROW);
			row.style.height = `${cssSize}%`;
			this.el.appendChild(row);

			for (let j = 0; j < size; j++) {
				cell = Component.string2Element(TMPL_CELL);
				cell.dataset['cell'] = `[${i}, ${j}]`;
				cell.style.width = `${cssSize}%`;
				row.appendChild(cell);
			}
		}

		this.el.addEventListener('click', this.cellClickListener);

		this.container.appendChild(this.el);
	}

	private cellClick(mouseEvent: MouseEvent): void {
		const target = <HTMLElement>mouseEvent.target;
		if (target.classList.contains('board-cell')) {
			const datacell = JSON.parse(target.dataset['cell']);
			this.clickSubject.next(<CellPosition>{
				i: datacell[0],
				j: datacell[1]
			});
		}
	}

	public subscribeClick(callback: {(cellPos: CellPosition): void}): Subscription {
		return this.clickSubject.subscribe(callback);
	}

	public destroy(): void {
		this.el.removeEventListener('click', this.cellClickListener);
	}

}
