import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spin, message } from "antd";
import { useApi } from "@/hooks";
import { PageHeader } from "@/components";

const OverviewPage: React.FC = () => {
  const { $baseApi } = useApi();
  const [loading, setLoading] = useState(true);
  const [dataCounts, setDataCounts] = useState({
    patients: 0,
    services: 0,
    appointments: 0,
  });

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [patientsRes, servicesRes, appointmentsRes] = await Promise.all([
        $baseApi.get("/patient-profiles"),
        $baseApi.get("/offered-services"),
        $baseApi.get("/appointments"),
      ]);
      setDataCounts({
        patients: patientsRes.data.length,
        services: servicesRes.data.length,
        appointments: appointmentsRes.data.length,
      });
    } catch (error) {
      message.error("Failed to fetch data counts");
    }
    setLoading(false);
  };

  return (
    <div className="h-full w-full">
      <PageHeader
        title="Dashboard Overview"
        subtitle="View overall data and contents in the system"
      />
      {loading ? (
        <Spin size="large" className="flex justify-center mt-10" />
      ) : (
        <Row gutter={16} className="mt-4">
          <Col span={8}>
            <Card title="Total Patients" className="text-center">
              <h2>{dataCounts.patients}</h2>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Total Services" className="text-center">
              <h2>{dataCounts.services}</h2>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Total Appointments" className="text-center">
              <h2>{dataCounts.appointments}</h2>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default OverviewPage;
