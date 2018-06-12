import { SharedDataModule } from './shared-data.module';
import { ApiDataService} from './api-data.service';
describe('SharedDataModule', () => {
  let sharedDataModule: SharedDataModule;

  beforeEach(() => {
    sharedDataModule = new SharedDataModule();
  });

  it('should create an instance', () => {
    expect(sharedDataModule).toBeTruthy();
  });
});
