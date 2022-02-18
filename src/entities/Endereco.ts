import {
  Entity,
  Column,
  CreateDateColumn,
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

  @Column()
  cep: string;

  @Column()
  client_id: string;



  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client: Client;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
