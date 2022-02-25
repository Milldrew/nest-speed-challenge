import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Beverage } from './beverage.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany((type) => Beverage, (beverage) => beverage.flavors)
  beverages: Beverage[];
}
