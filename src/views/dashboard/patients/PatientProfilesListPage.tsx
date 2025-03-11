import React, { useEffect, useState } from "react";
import { Flex, Modal, Button, Table, Form, Input, Select, message, Space, Switch } from "antd";
import { useApi } from "@/hooks";
import { PageHeader } from "@/components";

const apiEndpoint = "/patient-profiles";

interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  gender?: "male" | "female" | "other";
  contact_number?: string;
  email?: string;
  address?: string;
  emergency_contact_name?: string;
  emergency_contact_number?: string;
  blood_type?: string;
  medical_history?: string;
  allergies?: string;
  smoker: boolean;
  diabetic: boolean;
  insurance_provider?: string;
  insurance_policy_number?: string;
}

const PatientProfilesList: React.FC = () => {
  const { $baseApi } = useApi();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [formModal, setFormModal] = useState<any>({ open: false, data: null });
  const [form] = Form.useForm();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const { data } = await $baseApi.get(apiEndpoint);
      setPatients(data);
    } catch (error) {
      message.error("Failed to load patients");
    }
    setLoading(false);
  };

  const handleFormModal = (open: boolean, data: Patient | null = null) => {
    setFormModal({ open, data });
    if (open) {
      form.setFieldsValue(data || { smoker: false, diabetic: false });
    } else {
      form.resetFields();
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await $baseApi.delete(`${apiEndpoint}/${id}`);
      message.success("Patient deleted successfully");
      fetchPatients();
    } catch (error) {
      message.error("Failed to delete patient");
    }
  };

  const handleSubmit = async (values: Partial<Patient>) => {
    try {
      if (formModal.data) {
        await $baseApi.put(`${apiEndpoint}/${formModal.data.id}`, values);
        message.success("Patient updated successfully");
      } else {
        await $baseApi.post(apiEndpoint, values);
        message.success("Patient created successfully");
      }
      handleFormModal(false);
      fetchPatients();
    } catch (error) {
      message.error("Failed to save patient");
    }
  };

  const columns = [
    { title: "First Name", dataIndex: "first_name", key: "first_name" },
    { title: "Last Name", dataIndex: "last_name", key: "last_name" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Contact Number", dataIndex: "contact_number", key: "contact_number" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Smoker",
      dataIndex: "smoker",
      key: "smoker",
      render: (smoker: boolean) => (smoker ? "Yes" : "No"),
    },
    {
      title: "Diabetic",
      dataIndex: "diabetic",
      key: "diabetic",
      render: (diabetic: boolean) => (diabetic ? "Yes" : "No"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Patient) => (
        <Space>
          <Button onClick={() => handleFormModal(true, record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="h-full w-full">
      <Modal
        title={formModal.data ? "Edit Patient" : "New Patient"}
        open={formModal.open}
        onCancel={() => handleFormModal(false)}
        onOk={() => form.submit()}
        okText={formModal.data ? "Edit Patient" : "Upload Patient"}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true, message: "First Name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true, message: "Last Name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select options={[{ value: "male" }, { value: "female" }, { value: "other" }]} />
          </Form.Item>
          <Form.Item name="contact_number" label="Contact Number">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input type="email" />
          </Form.Item>
          <Form.Item name="smoker" label="Smoker" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item name="diabetic" label="Diabetic" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>

      <PageHeader title="Patient Profiles" subtitle="Manage patient information">
        <Flex justify="flex-end" gap="2">
          <Button type="primary" onClick={() => handleFormModal(true)}>
            New Patient
          </Button>
        </Flex>
      </PageHeader>

      <Table
        dataSource={patients}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default PatientProfilesList;
