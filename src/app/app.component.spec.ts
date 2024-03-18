import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', (): void => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [RouterTestingModule],
		declarations: [AppComponent]
	}));

	it('should create the app', (): void => {
		const fixture = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'ng-universal-demo'`, (): void => {
		const fixture = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.componentInstance;
		expect(app.title).toEqual('ng-universal-demo');
	});

	it('should render title', (): void => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.content span')?.textContent).toContain('ng-universal-demo app is running!');
	});
});
