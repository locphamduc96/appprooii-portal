import { useParams } from 'react-router-dom';
import DigitalMktConstant from '../../Constant/DigitalMktConstant';
import StrategyConstant from '../../Constant/StrategyConstant';
import DigitalMarketing from './DigitalMarketing';
import StrategyConsultancy from './StrategyConsultancy';

const ServicesPageRouter = () => {
  const { name } = useParams();

  switch (name) {
    default:
      return <></>
      //
    case 'value-proposition-design':
      return <StrategyConsultancy {...StrategyConstant.VALUE_PROPOSITION_DESIGN} />;
    case 'brand-communication':
      return <StrategyConsultancy {...StrategyConstant.BRAND_COMMUNICATION} />;
    case 'growth-hacking-strategy':
      return <StrategyConsultancy {...StrategyConstant.GROWTH_HACKING_STRATEGY} />;
      //
    case 'app-store-optimisation':
      return <DigitalMarketing {...DigitalMktConstant.APP_STORE_OPTIMISATION} />;
    case 'performance-advertising':
      return <DigitalMarketing {...DigitalMktConstant.PERFORMANCE_ADVERTISING} />;
    case 'affiliate-marketing':
      return <DigitalMarketing {...DigitalMktConstant.AFFILIATE_MARKETING} />;
    case 'content-marketing':
      return <DigitalMarketing {...DigitalMktConstant.CONTENT_MARKETING} />;
    case 'website-audit':
      return <DigitalMarketing {...DigitalMktConstant.WEBSITE_AUDIT} />;
    case 'marketing-automation':
      return <DigitalMarketing {...DigitalMktConstant.MARKETING_AUTOMATION} />;
  }
};

export default ServicesPageRouter;
