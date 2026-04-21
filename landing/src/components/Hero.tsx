import { ActionButtons } from './ActionButtons'

export const Hero = () => (
  <section
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '40px 24px',
      background: 'linear-gradient(180deg, #000F23 0%, #013763 70%, #00668B 88%, #00B9AD 100%)',
      textAlign: 'center',
      color: '#ffffff',
    }}
  >
    <p
      style={{
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: '24px',
      }}
    >
      inc online
    </p>

    <h1
      style={{
        fontSize: 'clamp(36px, 6vw, 72px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        maxWidth: '760px',
        marginBottom: '24px',
      }}
    >
      Open source, modular,{' '}
      <span style={{ color: '#ffffff' }}>lego-like</span>{' '}
      entities onchain
    </h1>

    <p
      style={{
        fontSize: 'clamp(15px, 2vw, 18px)',
        fontWeight: 400,
        lineHeight: 1.7,
        color: 'rgba(255, 255, 255, 0.65)',
        maxWidth: '520px',
        marginBottom: '48px',
      }}
    >
      (under development) smart contract structure for fully onchain entities
      to manage funds, roles and permissions.
    </p>

    <ActionButtons />
  </section>
)
