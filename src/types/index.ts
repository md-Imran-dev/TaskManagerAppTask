export interface Task {
    id: string;
    title: string;
    time: string;
    timeLabel?: string;
    tags: string[];
    completed: boolean;
    iconColor: string;
    backgroundColor: string;
  }
  
  export interface DateItem {
    day: string;
    date: number;
    isSelected: boolean;
  }
  
  export interface DrawerOption {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
  }