export interface KitchenConfig {
  cabinetColor: string;
  counterTopColor: string;
  wallColor: string;
  floorColor: string;
  showGrid: boolean;
  lighting: 'dim' | 'normal' | 'bright';
}

export interface ModelProps {
  config: KitchenConfig;
}

