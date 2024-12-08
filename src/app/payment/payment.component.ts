import {Component, OnInit} from '@angular/core';
import {loadStripe} from "@stripe/stripe-js";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  elements: any;
  card: any;
  paymentStatus: string = ''; // Déclaration de paymentStatus pour afficher les messages

  constructor() {}

  ngOnInit(): void {
    this.initializeStripe();
  }

  async initializeStripe() {
    // Charger Stripe avec votre clé publique
    this.stripe = await loadStripe('pk_test_51PGUNhKxIn14U1N7r9xfNrA7YkMxTaxXFuTTYZTqA7mebNQSzQoAJFhfoyY5Ph6XpX51tLAfqLW4hncBegvBxPZB008v4PAXdD'); // Remplacez par votre propre clé publique Stripe

    // Créer un instance de Elements
    this.elements = this.stripe.elements();

    // Créer un élément de carte
    this.card = this.elements.create('card');
    this.card.mount('#card-element'); // Monte l'élément de carte dans l'élément HTML
  }

  async onSubmit(event: any) {
    event.preventDefault();

    // Créer un token Stripe à partir de la carte
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      this.paymentStatus = 'Error in payment: ' + error.message; // Afficher un message d'erreur
    } else {
      this.paymentStatus = 'Payment Successful! Token ID: ' + token.id; // Afficher le message de succès avec le token
      console.log('Received Stripe Token: ', token);

      // Vous pouvez envoyer ce token à votre serveur pour traiter le paiement
    }
  }
}
