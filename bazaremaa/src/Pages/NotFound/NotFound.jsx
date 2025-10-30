export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Página não encontrada</h1>
      <p style={styles.message}>
        Ops! A página que você está procurando não existe ou foi movida.
      </p>
      <a href="/" style={styles.link}>Voltar para a página inicial</a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '0 20px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#d32f2f',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#1976d2',
    border: '1px solid #1976d2',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: '0.3s',
  },
};