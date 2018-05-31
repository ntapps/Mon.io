import { SharedDataModule } from './shared-data.module';

describe('SharedDataModule', () => {
  let sharedDataModule: SharedDataModule;

  beforeEach(() => {
    sharedDataModule = new SharedDataModule();
  });

  it('should create an instance', () => {
    expect(sharedDataModule).toBeTruthy();
  });
});
