export default {
  configuration_app_version: 'Versione Applicazione',
  configuration_about: 'Info',
  configuration_clear_option: 'Annulla e ripristina l\'applicazione',
  configuration_clear_confirm_button: 'Annulla ora',
  configuration_clear_alert_title: 'Sei sicuro?',
  configuration_clear_alert_text: 'Pulizia cache, verranno rimossi:\n'
    + 'Configurazione Locale\n'
    + 'Oauth Client ID & Secret\n'
    + 'URL della tua instanza',
  cancel: 'Cancella',
  configuration_security: 'Sicurezza',
  configuration_share_feedback: 'Condividi un Feedback',
  configuration_report_issue: 'Segnala un problema',
  configuration_sources: 'Codice sorgente',
  configuration_debug: 'Debug',
  configuration_get_help: 'Aiuto',
  assetsHistoryCharts_chart_works: 'Questo grafico funziona meglio con 4 account.',
  assetsHistoryCharts_change_preferences: 'clicca qui',
  assetsHistoryCharts_choose_preferences_text: 'Per selezionare i tuoi account preferiti in Firefly III preferenze:',
  assetsHistoryCharts_home_screen: 'Schermata Home',
  transaction_form_description_required: 'La descrizione è richiesta.',
  transaction_form_description_short: 'Descrizione troppo corta.',
  transaction_form_amount_required: 'Importo è richiesto.',
  transaction_form_description_label: 'Descrizione',
  transaction_form_sourceAccount_label: 'Account sorgente',
  transaction_form_destinationAccount_label: 'Account destinatario',
  transaction_form_date_label: 'Data',
  transaction_form_amount_label: 'Importo',
  transaction_form_category_label: 'Categoria',
  transaction_form_budget_label: 'Budget',
  transaction_form_reset_button: 'Ripristina',
  transaction_form_submit_button: 'Salva',
  transaction_list_alert_title: 'Sei sicuro?',
  transaction_list_alert_text: 'Questa transazione verrà rimossa permanentemente:',
  transaction_list_delete_button: 'Elimina',
  transaction_list_cancel_button: 'Annulla',
  auth_form_url_label: 'Firefly III backend URL',
  auth_form_url_help: "senza '/' alla fine.",
  auth_form_url_placeholder: "Firefly III backend URL (senza '/' alla fine)",
  auth_form_oauth_clientId: 'Oauth Client ID',
  auth_form_oauth_client_secret: 'Oauth Client Secret',
  auth_form_secrets_help_message: 'Tutte le info sensibili verranno salvate in uno storage sicuro.',
  auth_form_set_redirect: 'Configura redirect URI to:',
  auth_form_need_help: 'Bisogno di aiuto?',
  auth_form_submit_button_initial: 'Log In',
  auth_form_submit_button_loading: 'Invio in corso...',
  home_accounts: 'Conti',
  layout_new_update_header: 'Nuovo aggiornamento disponibile',
  layout_new_update_body_text: 'Puoi sempre aggiornare dopo dal pannello \"Impostazioni\".',
  layout_new_update_cancel_button: 'Annulla',
  layout_new_update_update_button: 'Aggiorna adesso',

  // from version 0.31
  transaction_screen_title: 'Nuova Transazione',
  navigation_home_tab: 'Home',
  navigation_chart_tab: 'Grafici',
  navigation_create_tab: 'Crea',
  navigation_transactions_tab: 'Transazioni',
  navigation_settings_tab: 'Impostazioni',
  transaction_form_type_withdraw: 'Uscita',
  transaction_form_type_deposit: 'Entrata',
  transaction_form_type_transfer: 'Transferimento',

  // from 0.4.1
  period_switcher_monthly: 'Mensile',
  period_switcher_quarterly: 'Trimestrale',
  period_switcher_semiannually: 'Semestrale',
  period_switcher_yearly: 'Annuale',
  error_widget_title: 'Qualcosa è andato storto',
  home_container_error_title: 'Qualcosa è andato storto',
  home_container_error_description: 'Fallito recupero accessToken',
  oauth_token_error_title: 'Qualcosa è andato storto',
  oauth_token_error_description: 'Fallito recupero accessToken',
  oauth_token_info_title: 'Info',
  oauth_token_info_description: 'Authenticazione cancellata, controlla Client ID & backend URL.',
  oauth_token_success_title: 'Successo',
  oauth_token_success_description: 'Connessione sicura pronta per la tua instanza Firefly III.',
  transaction_form_success_title: 'Successo',
  transaction_form_success_description: 'Transazione creata. Clicca qui per andare alla lista delle transazioni.',
  transaction_form_error_title: 'Errore',
  home_header_time_range_year: 'Anno',
  home_header_time_range_q: 'Q', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: 'S', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Bilancio',
  history: 'Storico',
  home_categories: 'Categorie',
  home_net_worth: 'Patrimonio Netto',

  // from 0.7.0
  home_budgets: 'Budgets',
  configuration_ui: 'Interfaccia Utente',
  configuration_color_mode: 'Dark Mode',
  auth_form_personal_access_token_label: 'Personal Access Token',
  auth_use_personal_access_token: 'Utilizza un Personal Access Token',
  auth_external_heads_up: 'Se stai usando un provider di autenticazione esterno come Authelia, Keycloak, Cloudflare Tunnels, ecc. OAuth Clients non funziona. Puoi usare solo Personal Access Tokens.',
  auth_create_new_oauth_client: 'Creare un nuovo Oauth client in OAuth tab, qui:',
  auth_create_new_personal_access_token: 'Creare un nuovo Personal Access Token in OAuth tab, qui:',
  oauth_wrong_token_error_description: 'Fallita la validazione del accessToken, per favore ricontrolla il tuo token o l\'URL del backend.',
  transaction_screen_edit_title: 'Modifica Transazione',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Valuta estera',
  transaction_form_group_title_label: 'Descrizione della transazione divisa',
  transaction_form_group_title_placeholder: 'Titolo',
  transaction_form_group_title_helper: 'Se crei una transazione divisa, ci deve essere una descrizione globale per tutte le transazioni divise.',
  configuration_review_app_ios: 'Lascia una recensione',
  configuration_review_app_android: 'Lascia una recensione',

  // from 0.9.2
  assets_history_chart: 'Grafico conti',
  balance_history_chart: 'Grafico del patrimonio netto',
  balance_history_chart_no_data: 'Per accedere a questo grafico aggiorna FireflyIII all\'ultima verione.',
  account_not_included_in_net_worth: '* Conto non incluso nel Patrimonio Netto.',

  // from 0.10.0
  period: 'Periodo',
  currency: 'Valuta',

  home_all_accounts: 'Tutti i conti',

  // from 0.10.3
  router_back_button: 'Indietro',
  transaction_clone: 'Clona',
  transaction_delete: 'Elimina',

  // from 0.11.0
  configuration_credentials: 'Credenziali',
  configuration_manage_credentials: 'Gestione credenziali',
  configuration_credentials_add_button: 'Aggiungi credenziali',
  logout: 'Logout',

  // from 0.12.0
  credential_clear_confirm_button: 'Elimina',
  credential_clear_alert_title: 'Sei sicuro?',
  credential_clear_cancel_button: 'Annulla',
  go_to_credentials: 'Vai alle credenziali',

  configuration_logout_alert_title: 'Logout',
  load_more: 'Carica altro',

  // from X.X.X
  home_bills: 'Bollette',
  bills_paid: 'Pagato',
  bills_not_expected: 'Non attesa',
  transaction_form_bill_label: 'Bolletta',
};
