// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CardComponent } from './card.component';
// import { Component } from '@angular/core';
// import { By } from '@angular/platform-browser';

// @Component({
//   'selector': 'app-section-complete-test-card',
//   'template': `
//   <app-section titulo="Teste de Título" subtitulo="Teste de Subtitulo">
//     <div>Olá eu sou uma div</div>
//   </app-section>
//   `
// })
// class CompleteTestCardComponent {}
// @Component({
//   'selector': 'app-section-only-title-test-card',
//   'template': `
//   <app-section titulo="Teste de Título">
//     <div>Olá eu sou uma div</div>
//   </app-section>
//   `
// })
// class OnlyTitleTestCardComponent {}
// @Component({
//   'selector': 'app-section-only-subtitulo-test-card',
//   'template': `
//   <app-section subtitulo="Teste de Subtitulo">
//     <div>Olá eu sou uma div</div>
//   </app-section>
//   `
// })
// class OnlySubtitleTestCardComponent {}


// describe('Componente Section', () => {
//   let component1: CardComponent;
//   let component2: CompleteTestCardComponent;
//   let component3: OnlyTitleTestCardComponent;
//   let component4: OnlySubtitleTestCardComponent;
//   let fixture1: ComponentFixture<CardComponent>;
//   let fixture2: ComponentFixture<CompleteTestCardComponent>;
//   let fixture3: ComponentFixture<OnlyTitleTestCardComponent>;
//   let fixture4: ComponentFixture<OnlySubtitleTestCardComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         CardComponent,
//         CompleteTestCardComponent,
//         OnlyTitleTestCardComponent,
//         OnlySubtitleTestCardComponent
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture1 = TestBed.createComponent(CardComponent);
//     fixture2 = TestBed.createComponent(CompleteTestCardComponent);
//     fixture3 = TestBed.createComponent(OnlyTitleTestCardComponent);
//     fixture4 = TestBed.createComponent(OnlySubtitleTestCardComponent);

//     component1 = fixture1.componentInstance;
//     component2 = fixture2.componentInstance;
//     component3 = fixture3.componentInstance;
//     component4 = fixture4.componentInstance;

//     fixture1.detectChanges();
//     fixture2.detectChanges();
//     fixture3.detectChanges();
//     fixture4.detectChanges();
//   });

//   it('Renderização Básica do Componente', () => {
//     expect(component1).toBeTruthy();
//   });

//   it('Renderização com Título e Subtítulo', () => {
//     expect(component2).toBeTruthy();
//     expect(fixture2.debugElement.query(By.css('app-section .card-title')).nativeElement).toBeTruthy();
//     expect(fixture2.debugElement.query(By.css('app-section .card-subtitulo')).nativeElement).toBeTruthy();
//     expect(fixture2.debugElement.query(By.css('app-section .card-title')).nativeElement.innerHTML).toEqual('Teste de Título');
//     expect(fixture2.debugElement.query(By.css('app-section .card-subtitulo')).nativeElement.innerHTML).toEqual('Teste de Subtitulo');
//   });

//   it('Renderização apenas com Título', () => {
//     expect(component3).toBeTruthy();
//     expect(fixture3.debugElement.query(By.css('app-section .card-title')).nativeElement).toBeTruthy();
//     expect(fixture3.debugElement.query(By.css('app-section .card-subtitulo'))).toBeFalsy();
//     expect(fixture2.debugElement.query(By.css('app-section .card-title')).nativeElement.innerHTML).toEqual('Teste de Título');
//   });

//   it('Renderização apenas com Subtítulo', () => {
//     expect(component4).toBeTruthy();
//     expect(fixture4.debugElement.query(By.css('app-section .card-subtitulo')).nativeElement).toBeTruthy();
//     expect(fixture4.debugElement.query(By.css('app-section .card-title'))).toBeFalsy();
//     expect(fixture2.debugElement.query(By.css('app-section .card-subtitulo')).nativeElement.innerHTML).toEqual('Teste de Subtitulo');
//   });
// });
// // 