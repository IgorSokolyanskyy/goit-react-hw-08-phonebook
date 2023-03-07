import Layout from './components/Layout';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
}
