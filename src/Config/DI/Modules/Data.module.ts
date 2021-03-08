import { Types } from '../Types'
import { ContainerModule } from 'inversify'
import { LocalDatabase } from '../../../Data/Drivers/LocalDatabase/LocalDatabase'

export const Data = new ContainerModule((bind) => {
  bind<LocalDatabase>(Types.Database).to(LocalDatabase)
})
