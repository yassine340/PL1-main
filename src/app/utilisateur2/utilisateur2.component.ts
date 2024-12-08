import { Component } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import { utilisateurs } from '../Model/utilisateurs.mode'; // Import the model

@Component({
  selector: 'app-utilisateur2',
  templateUrl: './utilisateur2.component.html',
  styleUrls: ['./utilisateur2.component.css']
})
export class Utilisateur2Component {
  utilisateurs: utilisateurs[] = [];
  selectedUser: utilisateurs | null = null;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router, // Inject Router service
    private activatedRoute: ActivatedRoute // Inject ActivatedRoute service
  ) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers(): void {
    this.utilisateurService.getAllUsers().subscribe({
      next: (data) => this.utilisateurs = data,
      error: (err) => alert('Error fetching users' + err)
    });
  }

  deleteUser(id: number): void {
    // Confirmation before deletion
    const confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.utilisateurService.deleteUser(id).subscribe({
        next: () => {
          alert('User deleted successfully');
          // Refresh the page after deletion
          window.location.reload(); // This reloads the entire page
        },
        error: (err) => alert('User deleted successfully')
      });
    } else {
      alert('User deletion canceled');
    }
  }

  updateRole(id: number, newRole: string): void {
    // Confirmation before updating role
    const confirmation = confirm('Are you sure you want to update the role for this user?');
    if (confirmation) {
      this.utilisateurService.updateRole(id, newRole).subscribe({
        next: () => {
          alert('Role updated successfully');
          // Refresh the page after role update
          window.location.reload(); // This reloads the entire page
        },
        error: (err) => alert('Role updated successfully')
      });
    } else {
      alert('Role update canceled');
    }
  }

  updateDetails(id: number): void {
    this.router.navigate(['/user-details', id]);
  }
  // Méthode pour naviguer
  voirHistorique(utilisateurId: number): void {
    this.router.navigate(['/historique', utilisateurId]);
  }
}
