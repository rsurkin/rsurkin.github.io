import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUndo, 
  faRedo,
  faSave,
  faFileUpload,
} from '@fortawesome/free-solid-svg-icons'

export default () => {
  library.add(faUndo);
  library.add(faRedo);
  library.add(faSave);
  library.add(faFileUpload);
}