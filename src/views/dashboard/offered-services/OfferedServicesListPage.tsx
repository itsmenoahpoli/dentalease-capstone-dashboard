import React, { useEffect, useState } from "react";
import { Flex, Modal, Button, Table, Form, Input, InputNumber, Switch, message, Space } from "antd";
import { useApi } from "@/hooks";
import { PageHeader } from "@/components";

const apiEndpoint = "/offered-services";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: boolean;
}

const OfferedServicesListPage: React.FC = () => {
  const { $baseApi } = useApi();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [formModal, setFormModal] = useState<any>({ open: false, data: null });
  const [form] = Form.useForm();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data } = await $baseApi.get(apiEndpoint);
      setServices(data);
    } catch (error) {
      message.error("Failed to load services");
    }
    setLoading(false);
  };

  const handleFormModal = (open: boolean, data: Service | null = null) => {
    setFormModal({ open, data });
    form.setFieldsValue(data || { name: "", description: "", price: 0, availability: true });
  };

  const handleDelete = async (id: number) => {
    try {
      await $baseApi.delete(`${apiEndpoint}/${id}`);
      message.success("Service deleted successfully");
      fetchServices();
    } catch (error) {
      message.error("Failed to delete service");
    }
  };

  const handleSubmit = async (values: Partial<Service>) => {
    try {
      if (formModal.data) {
        await $baseApi.put(`${apiEndpoint}/${formModal.data.id}`, values);
        message.success("Service updated successfully");
      } else {
        await $baseApi.post(apiEndpoint, values);
        message.success("Service created successfully");
      }
      handleFormModal(false);
      fetchServices();
    } catch (error) {
      message.error("Failed to save service");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `PHP ${price.toFixed(2)}`,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (available: boolean) => (available ? "Available" : "Unavailable"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Service) => (
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
        title={formModal.data ? "Edit Service" : "New Service"}
        open={formModal.open}
        onCancel={() => handleFormModal(false)}
        onOk={() => form.submit()}
        okText={formModal.data ? "Edit Service" : "Upload Service"}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Service Name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Description is required" }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Price is required" }]}
          >
            <InputNumber min={0} className="w-full" />
          </Form.Item>
          <Form.Item name="availability" label="Availability" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>

      <PageHeader
        title="Offered Services"
        subtitle="Manage services name, description, price, and availability"
      >
        <Flex justify="flex-end" gap="2">
          <Button type="primary" onClick={() => handleFormModal(true)}>
            New Service
          </Button>
        </Flex>
      </PageHeader>

      <Table
        dataSource={services}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default OfferedServicesListPage;
