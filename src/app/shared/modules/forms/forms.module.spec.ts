import { DynamicFormsModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: DynamicFormsModule;

  beforeEach(() => {
    formsModule = new DynamicFormsModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
