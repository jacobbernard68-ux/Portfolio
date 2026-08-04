const integrations = {
  isSanityEnabled: false,
  isStripeEnabled: true,
  isOpenAIEnabled: true,
  isMailchimpEnabled: true,
  isAuthEnabled: false,
};

const messages = {
  sanity: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Sanity is not enabled. Follow the documentation to enable it.
    </div>
  ),
  stripe: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Stripe is not enabled. Follow the documentation to enable it.
    </div>
  ),
  opanAi: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      OpenAI is not enabled. Follow the documentation to enable it.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Mailchimp is not enabled. Follow the documentation to enable it.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Auth is not enabled. Follow the documentation to enable it.
    </div>
  ),
};

export { integrations, messages };
