import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../services/commande.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-historique-commandes',
  templateUrl: './historique-commandes.component.html',
  styleUrls: ['./historique-commandes.component.css']
})
export class HistoriqueCommandesComponent implements OnInit {
  utilisateurId!: number;
  commandes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID utilisateur depuis l'URL
    this.utilisateurId = +this.route.snapshot.paramMap.get('id')!;
    this.loadHistorique();
  }

  loadHistorique(): void {
    this.commandeService.getHistoriqueCommandes(this.utilisateurId).subscribe({
      next: (data) => this.commandes = data,
      error: (err) => console.error('Erreur lors de la récupération des commandes', err),
    });
  }
}
