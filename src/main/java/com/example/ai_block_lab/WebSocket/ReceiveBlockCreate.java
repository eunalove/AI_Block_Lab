package com.example.ai_block_lab.WebSocket;

        import java.util.List;
        import java.util.Map;

public class ReceiveBlockCreate {

    private String blockId;
    private String group;
    private List<String> ids;
    private Map<String, Object> json;
    private String type;
    private String xml;

    public ReceiveBlockCreate(String blockId, String group, List<String> ids, Map<String, Object> json, String type, String xml) {
        this.blockId = blockId;
        this.group = group;
        this.ids = ids;
        this.json = json;
        this.type = type;
        this.xml = xml;
    }

    public String getBlockId() {
        return blockId;
    }

    public void setBlockId(String blockId) {
        this.blockId = blockId;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public List<String> getIds() {
        return ids;
    }

    public void setIds(List<String> ids) {
        this.ids = ids;
    }

    public Map<String, Object> getJson() {
        return json;
    }

    public void setJson(Map<String, Object> json) {
        this.json = json;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getXml() {
        return xml;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }
}
