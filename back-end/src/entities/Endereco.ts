import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";

@Entity("endereco")
export class Endereco {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;



  @Column({ name: 'client_id', type: 'varchar' })
  clientId: string;

  @ManyToOne(type => Client, client => client.endereco)
  @JoinColumn({ name: 'client_id' })
  
  client: Client;

  
  @Column()
  principal: boolean;

  @Column()
  estado: string;
  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}