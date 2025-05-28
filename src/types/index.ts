import { ImageSourcePropType } from 'react-native';

export interface Task {
    id: string;
    title: string;
    time: string;
    timeLabel?: string;
    tags: string[];
    completed: boolean;
    
    icon?: ImageSourcePropType;
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
    icon: ImageSourcePropType;
}
