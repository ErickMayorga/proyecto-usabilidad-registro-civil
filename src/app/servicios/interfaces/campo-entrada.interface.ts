import {FormGroup} from "@angular/forms";

export interface CampoEntradaInterface {
  formGroup: FormGroup
  type: string
  title: string
  nameField: string
  helpText: string
  placeholder: string
  requiredMessage?: string
  lengthMessage?: string
  disable: boolean
}
