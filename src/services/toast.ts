import { OptionsObject } from 'notistack';
import { EventListener } from 'services/eventListener';

class ToastService {
  private updateEventListener = new EventListener<
    [string, OptionsObject['variant']]
  >();

  addListener(
    listener: (message: string, variant: OptionsObject['variant']) => void,
  ) {
    this.updateEventListener.addListener(listener);
  }

  removeListener(
    listener: (message: string, variant: OptionsObject['variant']) => void,
  ) {
    this.updateEventListener.removeListener(listener);
  }

  notify(message: string, variant: OptionsObject['variant']) {
    this.updateEventListener.raiseEvent(message, variant);
  }
}

const toastService = new ToastService();

export default toastService;
