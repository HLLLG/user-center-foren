import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'HLLLG出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'csdn',
          title: 'CSDN博客',
          href: 'https://blog.csdn.net/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> HLLLG Github</>,
          href: 'https://github.com/hlllg',
          blankTarget: true,
        }
      ]}
    />
  );
};
export default Footer;
